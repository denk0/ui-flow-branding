import React from 'react';

class StorageItem extends React.Component {
    render() {
        return (
            <div className="col-xs-12 storage-item">
                <div className="col-md-3 col-sm-4 wrapper">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    File for example
                </div>
            </div>
        );
    }
}
export default StorageItem;