import JSON from './scpFiles.json';

var ref = "References:";
var oth = "Other Information:";

const Data = JSON.map(
  scp => {
    if (scp.referenece === "" ) {
      ref = "";
    }
    if (scp.other === "" ) {
      oth = "";
    }
    return(
      <div key={scp.scpNumber} className="container card">
          <div className='card-body'>
              <img className='card-image' src={scp.img} alt={scp.scpNummber} id="Floatin" />
              <h1 className='card-text'><strong>SCP Number: </strong>{scp.scpNumber}</h1>
              <h1 className='card-text'><strong>Object Class: </strong>{scp.objectClass}</h1>
              <hr />
              <p className='card-text'><h3><strong>Containment Procedures: </strong></h3>{scp.scp}</p>
              <p className='card-text'><h3><strong>Description: </strong></h3>{scp.description}</p>
              <p className='card-text'><h3><strong>{ref} </strong></h3>{scp.referenece}</p>
              <p className='card-text'><h3><strong>{oth}</strong></h3>{scp.other}</p>
          </div>
      </div>
    )
  }
)

function SCPs() {
  return (
    <div className="container">
      {Data}
    </div>
  );
}

export default SCPs;