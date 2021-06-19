import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';


class Home extends React.Component{
  state={
    inputValue: '',
    end: [] ,
  };
  
  
  onClick = (value) => {
    this.setState({ 
      inputValue: this.state.inputValue + value })
  }

  delNum=()=>{
    this.setState({inputValue: ""})
  }

  calCul=()=>{
    const cal = this.state.inputValue;
    const calCul = eval(this.state.inputValue);
    const end = this.state.end;
    end.push(cal + "=" + calCul)
    this.setState({inputValue: calCul})
  }

  render(){
    const {end} = this.state;
    return (
        <>
        <section className = "total">
        <section className="container">
            <div className = "low">
                <input className="input" type="text" value={this.state.inputValue}/>
            </div>
            <div className = "low">
                <button className="button1" type="submit" onClick={this.delNum}>AC</button>
                <button className="button2" type="submit" onClick={()=>this.onClick("/")}>%</button>
            </div>
            <div className = "low">
                <button type="submit" onClick={()=>this.onClick(7)}>7</button>
                <button type="submit" onClick={()=>this.onClick(8)}>8</button>
                <button type="submit" onClick={()=>this.onClick(9)}>9</button>
                <button className="button5" type="submit" onClick={()=>this.onClick("*")}>X</button>
            </div>
            <div className = "low">
                <button type="submit" onClick={()=>this.onClick(4)}>4</button>
                <button type="submit" onClick={()=>this.onClick(5)}>5</button>
                <button type="submit" onClick={()=>this.onClick(6)}>6</button>
                <button className="button5" type="submit" onClick={()=>this.onClick("-")}>-</button>
            </div>
            <div className = "low">
                <button type="submit" onClick={()=>this.onClick(1)}>1</button>
                <button type="submit" onClick={()=>this.onClick(2)}>2</button>
                <button type="submit" onClick={()=>this.onClick(3)}>3</button>
                <button className="button5"  type="submit" onClick={()=>this.onClick("+")}>+</button>
            </div>
            <div className = "low">
                <button className="button3" type="submit" onClick={()=>this.onClick(0)}>0</button>
                <button className="button4" type="submit" onClick={()=>this.onClick(".")}>.</button>
                <button className="button5" type="submit" onClick={this.calCul}>=</button>
            </div>
        </section>
        <section className="container2">
          <div className = "result">
            <div className ="name">결과</div>
            <div className = "log">
              {this.state.end.map((end)=>
                <span>{end}</span>)}</div>
          </div>
        </section>
        </section>
        </>
    );
  }

}


export default Home;