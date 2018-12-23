import React from "react";
import { format } from "url";

class StorePicker extends React.Component {
    render() {
        return (
        <form className="store-selector">
            { /* This is a store picker*/ }
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store name" />
            <button type="submit">Visit Store </button>
        </form>
        )
    }
}
export default StorePicker;