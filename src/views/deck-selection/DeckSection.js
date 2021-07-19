import React from 'react'
import cx from 'classnames';
import './index.css';
import Card from '../../components/UI/Card';
import { Button } from 'antd';

const ActionButton = (props) => (
    props.isOccupied ? <div className="occupied">Occupied</div> : <Button>Select</Button>
);

const DeckSection = (props) => {
    const isOccupied = true;
    return (
        <div className={cx(props.className)}>
            <div className="heading">Choose a Deck</div>
            <h4 className="subHeading mt-3">Please Select A Deck From Below To See The Available Room Options</h4>
           <Card className="mt-4">
            <table className="table">
                <thead className="tHeader">
                    <tr>
                        <th className="align-middle">Deck NO.</th>
                        <th className="align-middle">Details</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr>
                        <td>1</td>
                        <td>
                            <span>Cordelia Business Centre</span>
                            <Button>Select</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <span>Waterfront Restaurant</span>
                            <ActionButton isOccupied={isOccupied}/>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <span>Internet cafe</span>
                            <Button className="selected">Select</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <span>Card Room (Board Games - For Adukt/Kids)</span>
                            <Button>Select</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            <span>Library</span>
                            <Button>Select</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            <span>Food Court, Pool Bar, Rock Climing, Night Club, Spa, Adventure Ocean</span>
                            <Button>Select</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            <span>Sun Deck, Fitness Centre, Gift Shop</span>
                            <Button>Select</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </Card>
        </div>
    )
}

export default DeckSection
