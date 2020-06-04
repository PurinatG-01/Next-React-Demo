import React, { Component } from "react";
import DataCard from "./dataCard";
import ThemeContext from './theme'

const dashboardWrapper = {
  margin: "50px auto",
  boxShadow: "0px 50px 33px 19px rgba(0,0,0,0.05)",
  padding: "50px",
  borderRadius: "10px",
};

class Dashboard extends Component {
  state = {
    cards: [
      { id: 0, title: "Item 1", desc: "This is the dec of list-1", value: 0},
      { id: 1, title: "Item 2", desc: "This is the dec of list-2", value: 1},
      { id: 2, title: "Item 3", desc: "This is the dec of list-3", value: 2},
      { id: 3, title: "Item 4", desc: "This is the dec of list-4", value: 3},
    ],
    total:0,
    updated:0
  };

  // ============ REACT LIFE CYCLE ======================

  // ============ MOUNTING ===================
  constructor(){
    super()
    console.log("[ Constructor ]")
    this.calculateTotal = this.calculateTotal.bind(this)
    this.calculateUpdated = this.calculateUpdated.bind(this)
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log("[ Get Derived State from Props ]")
  // }

  componentDidMount(){
    console.log("[ Component Did Mount ]")
    this.calculateTotal(this.state.cards)
  }

  // =============== UPDATE =================
  shouldComponentUpdate(nextProps, nextState){
    console.log('[ Component Should Update ]')
    console.log('NextProps :' + nextProps)
    console.log('NextState :' + nextState)
    //  ----- Yes Update -----
    return true
  }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('[ Snapshot Before Update ]')
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[ Component Did Update ]')
    console.log('PrevProps : '+ prevProps)
    console.log('PrevState : '+ prevState)
    console.log('SnapShot  : '+ snapshot)
  }
  // ================ UNMOUNTING ==============

  componentWillUnmount(){
    // ------- Prepare for delete -------
    alert("UNMOUNT!!")
    console.log('[ Component Will Unmount ]')
  }

  // ================= ERROR HANDLING ============
  static getDerivedStateFromError(error){
    console.log('[ Get Derived State from Error ]')
    return { hasError: true }
  }



  // ============ REACT LIFE CYCLE ======================

  handleChangeData = (flag, id) => {
    if (flag) {
      const cards = this.state.cards;
      cards.forEach(e =>{
        if(e.id == id){e.value = e.value++}
      })
      this.setState({ cards: cards });
    } else {
      const cards = this.state.cards;
      cards.forEach(e =>{
        if(e.id == id){e.value = e.value--}
      })
      this.setState({ cards: cards });
    }
  };

  handleDataCard() {
    return this.state.cards.map((data) => (
      <DataCard
        onChangeData={this.handleChangeData}
        key={data.id}
        data={data}
        callbackTotal={this.callbackTotal}
        callbackDelete={this.callbackDelete}
      />
    ));
  }

  calculateTotal(cards){
    let _total = 0
    cards.map(e => {
      _total += e.value
    })
    console.log(cards)
    this.setState({total:_total})
  }

  calculateUpdated(){
    this.setState({updated: this.state.updated + 1})
  }

  callbackTotal = (value,id) => {
    console.log("[ Data Updated ]")
    // ----- Set card value -----
    let _total = 0
    const cards = this.state.cards
    cards.forEach(e =>{
        if(e.id == id){
            e.value = value
        }
      })

    // ----- Set total value -----
    this.calculateTotal(this.state.cards)
    this.calculateUpdated()
  }

  callbackDelete = (id) =>{
    let cards = this.state.cards
    cards = cards.filter((cards)=> {return cards.id != id})
    console.log("Cards : "+cards)
    this.setState({cards: cards})
    console.log("Here 1")
    this.calculateTotal(cards)
    this.calculateUpdated()
  }

  render() {
    return <div style={dashboardWrapper}>
      <h2 style={{textAlign:"center"}}>
        <span className="badge badge-pill badge-dark mx-2">Updated : </span>
        <span className="badge badge-pill badge-warning">{this.state.updated}</span>
        <span className="badge badge-pill badge-dark mx-2">Total : </span>
        <span className="badge badge-pill badge-info">{this.state.total}</span>
      </h2>
      {this.handleDataCard()}  
      </div>;
  }

  

}

export default Dashboard;
