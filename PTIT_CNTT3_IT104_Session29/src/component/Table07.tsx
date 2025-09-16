import React, { useEffect, useState } from "react";
import { Divider, Radio, Table, Button, Space, Modal } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import type { Student } from "./GetAllStudent";

const Table07: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get<Student[]>("http://localhost:3000/students");
      setStudents(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const showDeleteModal = (record: Student) => {
    setStudentToDelete(record);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/students/${studentToDelete?.id}`
      );
      fetchStudents();
    } catch (err) {
      console.error("Lỗi khi xóa:", err);
    } finally {
      setIsModalOpen(false);
      setStudentToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStudentToDelete(null);
  };

  const columns: TableColumnsType<Student> = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên sinh viên", dataIndex: "student_name" },
    { title: "Email", dataIndex: "email" },
    { title: "Địa chỉ", dataIndex: "address" },
    { title: "Số điện thoại", dataIndex: "phone" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: boolean) => (status ? "Active" : "Inactive"),
    },
    { title: "Ngày tạo", dataIndex: "created_at" },
    {
      title: "Hành động",
      render: (_, record) => (
        <Space>
          <Button>Sửa</Button>
          <Button danger onClick={() => showDeleteModal(record)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const rowSelection: TableProps<Student>["rowSelection"] = {
    getCheckboxProps: (record: Student) => ({
      disabled: record.student_name === "Disabled User",
      name: record.student_name,
    }),
  };

  return (
    <div>
      <Radio.Group
        onChange={(e) => setSelectionType(e.target.value)}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">Radio</Radio>
      </Radio.Group>
      <Divider />
      <Table<Student>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={students}
        rowKey="id"
      />

      <Modal
        title="Xác nhận xóa"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <p>
          Bạn có chắc muốn xóa sinh viên <b>{studentToDelete?.id}</b> không?
        </p>
      </Modal>
    </div>
  );
};

export default Table07;
