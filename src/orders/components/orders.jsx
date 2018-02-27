// import PropTypes from 'prop-types'
import * as OrderActions from "../actions/orders";
import React from "react";
import { connect } from "react-redux";
// import {Row, Col, Button, Navbar, MenuItem, Nav, NavItem, NavDropdown} from "react-bootstrap";

class Orders extends React.Component {
    render() {
        return (
            <div>
                Orders Page
            </div>
        );
    }
}

Orders.propTypes = {
};

function mapStateToProps(state) {
    return state;
}

const VisibleOrder = connect(
    mapStateToProps,
    OrderActions
)(Orders);

export default VisibleOrder;
