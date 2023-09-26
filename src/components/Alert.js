import React from 'react'

function Alert(props) {
    const caps = (word)=>{
        const lwr = word.toLowerCase();
        return lwr.charAt(0).toUpperCase()+lwr.slice(1);
    }

  return (
    <div style={{height:'4rem'}}>

    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caps(props.alert.type)}</strong> {props.alert.msg} 
      </div>
    }
    </div>
  )
}

export default Alert

