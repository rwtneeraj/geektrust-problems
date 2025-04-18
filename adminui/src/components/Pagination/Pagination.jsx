import React, { useContext, useEffect, useState, useMemo } from "react";
import "./Pagination.css";
import Users from "./../../data/data.json";
import { UserContext } from "../context/UserContextProvider";

const PageHeader = () => {
  return (
    <div className="Page">
      <input type="checkbox" className="input-checkbox" />
      <ul className="header-items">
        <li>Name</li>
        <li>Email</li>
        <li>Role</li>
        <li>Actions</li>
      </ul>
    </div>
  );
};

const UserData = ({ user }) => {
  const { id, name, email, role } = user;
  const { users, setUsers,setDeletedUser,deleteUser } = useContext(UserContext);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
 
  const deleteSelected = (id) => {
    const selectedUser = Users.filter((user) => user.id === id);
    setDeletedUser({...deleteUser,selectedUser});
  } 

  return (
    <div className="Page">
      <input type="checkbox" className="input-checkbox" onChange={(id)=>deleteSelected(id)}/>
      <ul className="user-data">
        <li>
          {id} {name}
        </li>
        <li>{email}</li>
        <li>{role}</li>
        <li className="buttons">
          <button onClick={() => {}}>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDelete(id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

const UpdatePages = ({
  page_no,
  page_type,
  setToUserNo,
  setFromUserNo,
  currentPage,
  setCurrentPage,
}) => {
  const totalPage = Users.length / 10;

  if (page_type === "previous" && page_no >= 1) {
    setCurrentPage(page_no);
    setFromUserNo(page_no - 1 * 10);
    setToUserNo(page_no * 10);
  }

  if (page_type === "next" && page_no <= Users.length / 10) {
    setCurrentPage(page_no);
    setFromUserNo(currentPage * 10);
    setToUserNo(currentPage * 10 + 10);
  }

  if (page_type === "last") {
    setCurrentPage(totalPage);
    setFromUserNo((totalPage - 1) * 10);
    setToUserNo(totalPage * 10);
  }

  if (page_type === "first") {
    setCurrentPage(1);
    setFromUserNo(0);
    setToUserNo(10);
  }

  if (page_type === "custom") {
    setCurrentPage(page_no);
    setFromUserNo((page_no - 1) * 10);
    setToUserNo(page_no * 10);
  }
};

const GetPages = ({
  length,
  currentPage,
  setToUserNo,
  setFromUserNo,
  setCurrentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= length / 10; i++) {
    pages.push(
      <button
        className="custom-page page-navigator"
        onClick={() =>
          UpdatePages({
            page_no: i,
            page_type: "custom",
            currentPage,
            setToUserNo,
            setFromUserNo,
            setCurrentPage,
          })
        }
      >
        {i}
      </button>
    );
  }

  return pages;
};

const PageFooter = ({ length }) => {
  const { currentPage, setToUserNo, setFromUserNo, setCurrentPage } =
    useContext(UserContext);
  return (
    <div className="page-footer">
      <div className="delete-btn">Delete Selected</div>
      <div className="page-navigation">
        <button
          className="start-page page-navigator"
          onClick={() =>
            UpdatePages({
              page_type: "first",
              currentPage,
              setToUserNo,
              setFromUserNo,
              setCurrentPage,
            })
          }
        >
          <i className="fa-solid fa-backward"></i>
        </button>
        <button
          className="previous-page page-navigator"
          onClick={() =>
            UpdatePages({
              page_no: currentPage - 1,
              page_type: "previous",
              setToUserNo,
              setFromUserNo,
              setCurrentPage,
            })
          }
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>

        <GetPages
          length={length}
          currentPage={currentPage}
          setToUserNo={setToUserNo}
          setFromUserNo={setFromUserNo}
          setCurrentPage={setCurrentPage}
        />

        <button
          className="next-page page-navigator"
          onClick={() =>
            UpdatePages({
              page_no: currentPage + 1,
              page_type: "next",
              currentPage,
              setToUserNo,
              setFromUserNo,
              setCurrentPage,
            })
          }
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
        <button
          className="last-page page-navigator"
          onClick={() =>
            UpdatePages({
              page_type: "last",
              currentPage,
              setToUserNo,
              setFromUserNo,
              setCurrentPage,
            })
          }
        >
          <i class="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export const Pagination = () => {
  const { users, setUsers, toUserNo, setToUserNo, fromUserNo, currentPage } = useContext(UserContext);
  const totalPage = Users.length / 10;

  useEffect(() => {
    const firstTenUser = [];
    const endUser = currentPage === totalPage ? Users.length : toUserNo;
    setToUserNo(endUser);

    for (let i = fromUserNo; i < toUserNo; i++) {
      firstTenUser.push(Users[i]);
    }

    setUsers(firstTenUser);
  }, [currentPage, setToUserNo, setUsers, fromUserNo, toUserNo]);

  return (
    <div>
      <PageHeader />
      {users.map((user) => (
        <UserData user={user} />
      ))}
      <PageFooter length={Users.length} />
    </div>
  );
};
