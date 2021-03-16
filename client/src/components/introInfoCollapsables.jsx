import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";
class IntronInfoCollapsable extends Component {
  constructor(props) {
    super(props);
    this.matchTextWithKey = this.matchTextWithKey.bind(this)
  }

  state = {
    open: true
  };

  matchTextWithKey(criterion) {
    var intron = this.props.intron[0]
    var intronKeys = new Array();
    var intronValues = new Array();
    for (var key in intron) {
      var count = intronKeys.push(key);
      var blah = intronValues.push(intron[key])
    }
    //console.log(intronKeys)

    for (var index in intronKeys) {
      console.log(intronKeys[index])
      var dullKey=intronKeys[index].toLocaleLowerCase().replace(/\s/g, '');
      var dullCriterion=criterion.toLocaleLowerCase().replace(/\s/g, '');
     // console.log(intronKeys[j].toLocaleLowerCase().replace(/\s/g, '') + ":" + criterion.toLocaleLowerCase().replace(/\s/g, ''))
      if (dullKey===dullCriterion)
      {
        
        return (
          <div className="m-4 d-flex justify-content-between">
            <h5 >
              {criterion}
            </h5>
            <span className="">{intronValues[index]}</span>

          </div>

        )
      }
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div className="border m-5">
        <div className="border border-dark d-flex p-4">
          <Button
            variant="light"
            className="m-1 p-2"
            size="small"
            onClick={() => this.setState({ open: !open })}
            aria-controls="tool"
            aria-expanded={this.state.open}
          >
            <Image
              src={'/icon.png'}
              width="30px"
              alt={this.state.isVisible === true ? "Hide" : "Show"}
            />
          </Button>
          <h2 className="m-2">{this.props.title}</h2>
        </div>
        <div aria-controls="tool">
          <Collapse in={open}>
            <div>
              {this.props.criteria.map((criterion) => (
               this.matchTextWithKey(criterion)

              ))}
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
}
export default IntronInfoCollapsable;
