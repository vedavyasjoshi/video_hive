import React from "react";
import { USER_IMAGE_URL } from "../utils/constants";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Ram",
      text: "Good Video",
      replies: [
        {
          name: "Suresh",
          text: "It is interesting",
          replies: [
            {
              name: "Prakash",
              text: "Nice video",
              replies: [],
            },
            {
              name: "Riya",
              text: "Interesting",
              replies: [],
            },
          ],
        },
        {
          name: "Karthik",
          text: "Wonderful",
          replies: [],
        },
      ],
    },
    {
      name: "Lakshmi",
      text: "Beautiful video",
      replies: [],
    },
    {
      name: "Mani",
      text: "It is good",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img className="w-14" src={USER_IMAGE_URL} alt="user" />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border borrder-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
