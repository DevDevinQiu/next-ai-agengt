"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const InfoIdDetail = () => {
  const { id } = useParams();

  const getId = async () => {
    const res = await fetch(`/api/user/?id=${id}`);
    const text = await res.json();
    console.log("text", text);
  };

  useEffect(() => {
    getId();
  }, []);

  return <div>this is Info Detail page, id is {id}</div>;
};

export default InfoIdDetail;
