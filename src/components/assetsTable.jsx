import React, {Component} from 'react';
import { getAssets } from '../services/assets';

class AssetsTable extends Component{

    state = {
        assets: getAssets()
    }

    render(){
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
                    {/* <tr>
                        <td>1</td>
                        <td>Tooltip</td>
                        <td>+100</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>DetailsList</td>
                        <td>+20</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>DatePicker</td>
                        <td>+3</td>
                    </tr> */}

                    {this.state.assets.map(asset => (
                            <tr>
                                <td>{asset.serial}</td>
                                <td>{asset.asset}</td>
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
