import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }

    this.calculate = this.calculate.bind(this);
    this.addDue = this.addDue.bind(this);
    this.addAmountReceived = this.addAmountReceived.bind(this);

  }

  addDue(e) {
    this.setState({
      amountDue: parseFloat(e.target.value)
    })
  }

  addAmountReceived(e) {
    this.setState({
      amountReceived: parseFloat(e.target.value)
    })
  }



  calculate() {
    // let final = (this.state.pay * 2000 ) - (this.state.price * 2000)
    //   console.log(this.state.final);
    //   return Math.round(final);


    //  let price =(amountDue)
    //   let pay = (amountReceived)
    let moneyChange = parseFloat(this.state.amountReceived - this.state.amountDue).toFixed(2);


    let twent;
    let ten;
    let five;
    let dollar;
    let quart;
    let dime;
    let nickel;
    let penn = 0;

    //twenties

    if (moneyChange >= 20) {
      let twent = Math.floor(moneyChange / 20)
      moneyChange = moneyChange % 20;

      this.setState({
        twenties: twent
      });
    }
    //tens

    if (moneyChange >= 100) {
      let ten = Math.floor(moneyChange / 10)
      moneyChange = moneyChange % 10;

      this.setState({
        tens: ten

      })
    }
    //fives

    if (moneyChange >= 5) {
      let five = Math.floor(moneyChange / 5)
      moneyChange = moneyChange % 5;
      this.setState({
        fives: five

      })
    }
    //dollars   
    if (moneyChange >= 1) {
      let dollar = Math.floor(moneyChange / 1)
      moneyChange = moneyChange % 1;

      this.setState({
        dollars: dollar
      })
    }
    //quarters
    if (moneyChange >= .25) {
      let quart = Math.floor(moneyChange / .25)
      moneyChange = moneyChange % 25;

      this.setState({
        quarters: quart
      })
    }
    //dimes
    if (moneyChange >= .10) {
      let dime = Math.floor(moneyChange / .10);
      moneyChange = moneyChange % .10;

      this.setState({
        dimes: dime
      });
    }
    //nickels
    if (moneyChange >= .05) {
      let nickel = Math.floor(moneyChange / .05);
      moneyChange = moneyChange % .05;

      this.setState({
        nickels: nickel
      })
    }

    // pennies
    if (moneyChange >= .01) {
      let penn = Math.floor(moneyChange / .01);
      moneyChange = moneyChange % .01;

      this.setState({
        pennies: penn
      })
    }
  }


  render() {
    return (
      // <h4>Enter Information</h4>
      <div className="container">
        <h2 className="text-white">Change Calculator</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="card" className="card text-left">
              <h6 className="card-header">Enter Information</h6>
              <div className="card-block">
                <h6 className="card-title">How much is due?</h6>
                <input
                  onChange={this.addDue}
                  type="text"
                  id="amount-due"
                  name="amountDue"
                  placeholder="0"
                />
                <h6 className="card-title-1"> How much was received?</h6>
                <input
                  onChange={this.addAmountReceived}
                  type="text"
                  id="amount-received"
                  name="amountReceived"
                  placeholder="0"
                />
                <div className="card-footer">
                  <button
                    onClick={this.calculate}
                    className="btn btn-primary btn-block"
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="col-8">
            <div className="card" >
              <div className="card-block">

                <h3 className="card-title" className="card text-center" >Total amount due is ${(this.state.amountReceived - this.state.amountDue).toFixed(2)}</h3>


                <div className="row">


                  <div className="well col-3 mb-2">
                    <div className="card">
                      <h5 className="card-title text-center">Twenties</h5>
                      <p id="twenties-output">{this.state.twenties}</p>
                    </div>
                  </div>



                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Tens</h5>
                      <p id="tens-output">{this.state.tens}</p>
                    </div>
                  </div>



                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Fives</h5>
                      <p id="fives-output">{this.state.fives}</p>
                    </div>
                  </div>

                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Dollars</h5>
                      <p id="ones-output">{this.state.dollars}</p>
                    </div>
                  </div>

                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Quarters</h5>
                      <p id="quarters-output">{this.state.quarters}</p>
                    </div>
                  </div>

                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Dimes</h5>
                      <p id="dimes-output">{this.state.dimes}</p>
                    </div>
                  </div>


                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Nickels</h5>
                      <p id="nickels-output">{this.state.nickels}</p>
                    </div>
                  </div>

                  <div className="well col-3">
                    <div className="card">
                      <h5 className="card-title text-center">Pennies</h5>
                      <p id="pennies-output">{this.state.pennies}</p>
                    </div>
                  </div>






                </div>



              </div>
            </div>
          </div>

        </div>
      </div>





    );
  }
}

export default App;
