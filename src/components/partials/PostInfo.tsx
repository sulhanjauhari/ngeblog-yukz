import React from "react";
import { TextAlit } from "../../styles/text";

const PostInfo: React.FC<PostInfoProp> = ({ author, createdAt, tags }) => (
  <TextAlit>
    Written by <b>{author}</b> on <b>{createdAt}</b> in{" "}
    {tags.map((tag, i) => (
      <b key={`tag-${i}`}>{tag}</b>
    ))}
  </TextAlit>
);

export default PostInfo;
