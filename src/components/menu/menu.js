import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
           <ul className="sidebar-menu" data-widget="tree">
            <li className="header">เมนูหลัก</li>
            <li className="active treeview menu-open">
              <a href="#">
                <i className="fa fa-dashboard" /> <span>Menu</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                 
                  <Link to="/report"><i className="fa fa-circle-o" />Report</Link> 
                  
                </li>
                <li className="/login">
                <Link to="/stock">
                    <i className="fa fa-circle-o" /> Stock
                </Link> 
                </li>
              </ul>
            </li>
            <li className="treeview">
            </li>
         </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
