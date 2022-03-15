import React from "react";
import List from "./List";

export default class Solution extends React.Component {
    render() {
        return (
            <div className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <List />
                    </div>
                </div>
            </div>
        )
    }
}