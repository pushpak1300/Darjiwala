import React from "react";
import Admin from "../../Shared/layouts/Admin";

const Create = () => {
    return (
        <div>
            <h2>Create</h2>

        </div>
    );
}

Create.layout = page => <Admin children={page} title="Create Customer" />;

export default Create;
