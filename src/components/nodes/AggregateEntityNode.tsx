import { Box, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react';

function convertToDiamondLength(w) {
    return Math.sqrt((w * w) / 2)
}

function getRotationAngle(a, h) {
    return Math.acos(a / h) * (180 / Math.PI)
}

function calculateLeftMargin(l) {
    const h = Math.sqrt(2) * l
    return (h - l) / 2
}

function calculateSidePadding(w) {
    return 40
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function AggregateEntityNode() {

    const FONT_SIZE = convertRemToPixels(1)
    const DEFAULT_INPUT_WIDTH = 10

    const [textValue, setTextValue] = useState("")
    const [inputWidth, setInputWidth] = useState(DEFAULT_INPUT_WIDTH)

    useEffect(() => {
        if (textValue.length * FONT_SIZE > DEFAULT_INPUT_WIDTH) {
            setInputWidth((textValue.length + 1) * FONT_SIZE)
        } else {
            setInputWidth(DEFAULT_INPUT_WIDTH)
        }
    }, [textValue, FONT_SIZE])

    const observedDiv: any = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(200);
    useEffect(() => {
        if (!observedDiv.current) {
            return;
        }

        const resizeObserver = new ResizeObserver(() => {
            if (observedDiv.current.offsetWidth !== width) {
                setWidth(observedDiv.current.offsetWidth);
            }
        });

        resizeObserver.observe(observedDiv.current);

        return function cleanup() {
            resizeObserver.disconnect();
        }
    }, [observedDiv, width])

    const useStyles = makeStyles({
        diamond: {
            position: 'relative',
            minHeight: 100,
            minWidth: 200,
            lineHeight: '1rem',
            width: 'fit-content',
            textAlign: 'center',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: `0px ${calculateSidePadding(convertRemToPixels(1))}px`,
        },
        decorator: {
            position: 'absolute',
            left: calculateLeftMargin(convertToDiamondLength(width - 2)),
            height: convertToDiamondLength(width - 2),
            width: convertToDiamondLength(width - 2),
            border: '2px solid black',
            
            transform: `rotateX(${getRotationAngle(50 - 8, (Math.sqrt(2) * convertToDiamondLength(width - 2) / 2))}deg) rotateZ(45deg) translate3d(0,0,0)`
        },
        inputCenter: {
            textAlign: "center",
            width: `${inputWidth}px`
        }
    })
    const classes = useStyles()


    return (
        <Box className={classes.diamond} ref={observedDiv}>
            <Input
                disableUnderline
                classes={{
                    input: classes.inputCenter
                }}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                style={{ position: 'relative', zIndex: 2 }} />
            <Box className={classes.decorator}>
            </Box>

        </Box>)
}

export default AggregateEntityNode