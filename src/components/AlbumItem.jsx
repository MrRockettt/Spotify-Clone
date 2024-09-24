import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, dec, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] px-3 p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{dec}</p>
    </div>
  );
};

export default AlbumItem;