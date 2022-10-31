import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SharingFooter from "./SharingFooter"

// JSON DATA
import JSONDATAPERSON from "../MOCK_DATA_PERSON.json";
import JSONDATAGROUP from "../MOCK_DATA_GROUP.json";

// img
import oslash_logo from "../img/oslash_logo.png"

const Widget = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [personPill, setPersonPill] = useState("");

  const [personToWidget, setPersonToWidget] = useState("");

  const onClickAddPerson = () => {
    setPersonToWidget(
      <article className="content_section">
      <div className="toggle_header">
        <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="avatar" className="avatar"/>
        <div>
          <header>Varun Bhabhra</header>
          <p>varunbhabhra.com</p>
        </div>
      </div>
      <Dropdown/>
    </article>
    )
  }
  
    const onClickAddPill = (val) => {
      setPersonPill(
        <div className="pill">
          <span>{val.name}</span>
          <i className="fa-solid fa-x"></i>
        </div>
      )
    }

  return (
    <section id="widget_wrapper">
      <section id="" className="widget_container">
        {/* Share To Web */}
        <article className="toggle_section">
          <div className="toggle_header">
            <i className="fa-solid fa-earth-americas"></i>
            <div>
              <header>Share to web</header>
              <p>Publish and share link with anyone</p>
            </div>
          </div>

          <div>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
        </article>

        {/* Input */}
        <article className="input_section">
          <div className="input_btn_div">
            <input type="search" placeholder="People, emails, groups" onChange={event => setSearchTerm(event.target.value)}/>
            <button className="invite_btn">Invite</button>
          </div>
        </article>

        {/* Content Section */}
        <article className="content_section">
          <div className="toggle_header">
            <img src={oslash_logo} alt="avatar" className="avatar"/>
            <div>
              <header>Everyone at OSlash</header>
              <p>25 workspace members</p>
            </div>
          </div>

          <Dropdown/>
        </article>
        {personToWidget}

        {/* Sharing Footer */}
        <SharingFooter/>
      </section>

      <section id="search_window_container" className="">
      {/* Search Window Input */}
      <article className="search_input_section">
        <div className="search_input_btn_div">
          {personPill}    
          <input type="search" placeholder="Search people, emails or groups" onChange={event => setSearchTerm(event.target.value)}/>
          <Dropdown/>
          <button className="invite_btn" onClick={onClickAddPerson}>Invite</button>
        </div>
      </article>

      {/* Person Section */}
      <section className="selection_section">
        <h3 className="select_person_heading">Select a person</h3>
        {JSONDATAPERSON.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="person" key={key} onClick={ () => onClickAddPill(val)}>
              <img src={val.img} alt="avatar"/>
              <div className="person_details">
                <header>{val.name}</header>
                <aside>{val.email}</aside>
              </div>
            </div>
          )
        })}
      </section>
        
      {/* Group Section */}
      <section className="selection_section">
        <h3 className="select_person_heading">Select a group</h3>
        {JSONDATAGROUP.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.group.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          } 
        }).map((val, key) => {
          return (
            <div className="person" key={key}>
              <img src={val.img} alt="avatar"/>
              <div className="person_details">
                <header>{val.group}</header>
              </div>
            </div>
          )
        })}
      </section>    

      {/* Footer  */}
      <SharingFooter/>
    </section>
    </section>
  )
};

export default Widget;