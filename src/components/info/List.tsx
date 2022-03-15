import React from "react";
import {INFORMATION as info} from "../../contrants/menu"

export default class List extends React.Component {    
    render() {
        return (
            info.map((item: any) => {
                return (
                    <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1">
                        {item.icon}
                    </div>
                    <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 text-left">{item.title}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                </a>
                )
            })
        )
    }
}