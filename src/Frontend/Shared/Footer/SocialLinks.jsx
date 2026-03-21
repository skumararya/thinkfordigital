
import React from "react";
import { useGetSocialLinksQuery } from "../../../redux/api/apiService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SocialLinks = () => {
  const { data: socialLinksResponse, isLoading } = useGetSocialLinksQuery();
  const links = socialLinksResponse?.data?.[0]?.data || [];

  if (isLoading || links.length === 0) {
    return <div className="col-auto social-icon" style={{ minHeight: '32px' }}></div>;
  }
  
  const getImageUrl = (path) => {
    if (path && path.startsWith('http')) {
        return path;
    }
    return `${API_BASE_URL}/${path}`;
  }

  return (
    <div className="col-auto social-icon">
      {links.map((item) => (
        <a key={item.id} href={item.title} target="_blank" rel="noopener noreferrer">
          <img src={getImageUrl(item.upload_image_path)} alt={item.title || 'Social Media'} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;