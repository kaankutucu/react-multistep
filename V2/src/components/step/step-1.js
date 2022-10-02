import React from "react";

class StepOne extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel js-active" data-animation="slideVert">
                <div className="inner">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span className="progress-text">1 of 5 Completed</span>
                            <div className="progress">
                                <div className="progress-bar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item text-center">
                        <h2>Applicant Data</h2>
                        <p>Please take a salfie with your document so that it’s clearly
									visible anddoses not cover your face.</p>
                    </div>
                    <div className="wizard-content-form">
                        <div className="wizard-form-field">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="wizard-form-input position-relative form-group has-float-label">
                                        <input type="text" className="form-control" name="name" placeholder="Name" />
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wizard-form-input position-relative form-group has-float-label">
                                        <input type="text" className="form-control" name="surname" placeholder="Surname" />
                                        <label>Surname</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-footer">

                        <div className="actions">
                            <ul>
                                <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                            <div>
                                <img src={require('../../assets/img/tr.png')} alt="" className="image-radius flag-width" />
                            </div>
                            <div>
                                <img src={require('../../assets/img/tr.png')} alt="" className="image-radius flag-width" />
                            </div>
                            <div>
                                <img src={require('../../assets/img/tr.png')} alt="" className="image-radius flag-width" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepOne;