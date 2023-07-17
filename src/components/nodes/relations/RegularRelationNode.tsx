import { makeStyles } from '@mui/styles';
import React, {useEffect, useState} from 'react'
import { Input } from '@mui/material';

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function RegularRelationNode() {

  const FONT_SIZE = convertRemToPixels(1)
    const DEFAULT_INPUT_WIDTH = 100

    const [textValue, setTextValue] = useState("")
    const height = 100
    const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH)

    useEffect(() => {
        if (textValue.length * FONT_SIZE > DEFAULT_INPUT_WIDTH) {
            setInputWidth((textValue.length + 1) * FONT_SIZE)
        } else {
            setInputWidth(DEFAULT_INPUT_WIDTH)
        }
    }, [textValue, FONT_SIZE])

  const useStyles = makeStyles({
    diamond: {
      height: height,
      width: inputWidth + 100
    },
    inputCenter: {
        textAlign: "center",
        width: `${inputWidth}px`
    }
  });
  const classes = useStyles();
  const points = `${(inputWidth + 100) / 2},1 1,50 ${(inputWidth + 100) / 2},99 ${(inputWidth + 100) - 1},50`;
  const foreignObjectHeight = 40; // Adjust this value based on the desired height of the foreignObject
  const textX = ((inputWidth + 100) - inputWidth) / 2;
  const textY = (height - foreignObjectHeight + 5) / 2;

  return (
    <svg className={classes.diamond}>
      <polygon points={points} fill="white" stroke="black" strokeWidth="1" />
      <foreignObject x={textX} y={textY} width={inputWidth + 2} height={foreignObjectHeight}>
        <Input
            disableUnderline
            classes={{
                input: classes.inputCenter
            }}
            placeholder='text'
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            style={{ position: 'relative', zIndex: 2 }} />
      </foreignObject>
    </svg>
  );
}

export default RegularRelationNode;
