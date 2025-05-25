"use client";

import React, { useState } from "react";
import "./project.scss";
import project_data from "@/data/project_data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFilter } from "react-icons/fa";

export default function ProjectCards() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const groupedServices = Array.from(
    new Set(project_data?.map((item) => item?.service))
  );
  const groupedCategories = Array.from(new Set(project_data?.map(item => item?.category)));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
 
  const handleServiceChange = (service) => {
    setSelectedServices(prev => {
      if(prev?.includes(service)) {
        return prev?.filter(item => item !== service)
      }
      return ([...prev, service])
    })
  }

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => {
      if(prev?.includes(type)) {
        return prev?.filter(item => item !== type)
      }
      return ([...prev, type])
    })
  }

  const filteredProjects = project_data.filter((item) => {
    const serviceMatch = selectedServices.length === 0 || selectedServices.includes(item.service);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.category);
    return serviceMatch && typeMatch;
  });

  return (
    <div className="projects-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaFilter />
      </button>
      
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar} />
      
      <div className="projects-grid">
        <div className={`projects-sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="project-services">
            <h3>Services</h3>
            <ul>
              {groupedServices?.map((item) => (
                <div key={item} className="checkbox-service">
                  <input 
                    id={`service-${item}`}
                    type="checkbox"
                    checked={selectedServices.includes(item)}
                    onChange={() => handleServiceChange(item)}
                  />
                  <label htmlFor={`service-${item}`}>{item}</label>
                </div>
              ))}
            </ul>
          </div>
          
          <div className="project-services">
            <h3>Type</h3>
            <ul>
              {groupedCategories?.map((item) => (
                <div key={item} className="checkbox-service">
                  <input 
                    type="checkbox"
                    id={`cat-check-${item}`}
                    checked={selectedTypes.includes(item)}
                    onChange={() => handleTypeChange(item)}
                  />
                  <label htmlFor={`cat-check-${item}`}>{item}</label>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="projects-content">
          {filteredProjects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            <div className="project-list">
              {filteredProjects.map((item) => (
                <div key={item.id} className="project-card">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                  <div className="project-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <Link href={`/project-details/${item.id}`}>
                      View Details 
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
