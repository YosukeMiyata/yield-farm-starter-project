// Main.js
import React, { Component } from 'react'
import dai from '../dai.png'
class Main extends Component {
  render() {
    return (
      <div id='content' className='mt-3'>
       <table className='table table-borderless text-muted text-center'>
           <thead>
               <tr>
                   <th scope='col' className="gradient-text">Staking Balance</th>
                   <th scope='col' className="gradient-text">Reward Balance</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td className="sub-text">{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
                   <td className="sub-text">{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
               </tr>
           </tbody>
       </table>
       <div className='card mb-4'>
           <div className='card-body'>
               <form className='mb-3' onSubmit={(event) => {
                   event.preventDefault()
                   let amount
                   amount = this.input.value.toString()
                   amount = window.web3.utils.toWei(amount, 'Ether')
                   this.props.stakeTokens(amount)
               }}>
                   <div>
                       <label className='float-left gradient-text'><b>Stake Tokens</b></label>
                       <span className='float-right text-muted sub-text'>
                       Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                       </span>
                   </div>
                   <div className='input-group mb-4'>
                       <input
                        type="text"
                        ref = {(input) => {this.input = input}}
                        className="form-control form-control-lg"
                        placeholder='0'
                        required
                       />
                       <div className='input-group-append'>
                           <img src={dai} height='32' alt=""/>
                           &nbsp;&nbsp;&nbsp; mDai
                       </div>
                   </div>
                   <button type='submit' className='cta-button connect-wallet-button'>STAKE!</button>
               </form>
               <button
                type='submit'
                className='cta-button connect-wallet-button'
                onClick={(event) => {
                    event.preventDefault()
                    this.props.unstakeTokens()
                }}
                >
                    UN-STAKE...
                </button>
           </div>
       </div>
      </div>
    );
  }
}

export default Main;