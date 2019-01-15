import React, {Component} from 'react';
import { getAssets } from '../services/assets';
import {Link} from 'react-router-dom';

class AssetsTable extends Component{

    state = {
        // assets: getAssets()
    }

    render(){
        console.log('this.props.assets: ' + this.props.assets)
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Asset</th>
                        <th>Size Difference</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.assets.map(asset => (
                            <tr>
                                <td>{asset.serial}</td>
                                <td><Link to={`/assets/${asset.name}`}>{asset.name}</Link></td>
                                <td>{asset.sizeDifference}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default AssetsTable;
