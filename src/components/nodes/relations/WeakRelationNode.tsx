import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react';
import DynamicInput from '../../DynamicInput';

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


function WeakRelationNode() {
    

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        decorator: {
            position: 'absolute',
            background: '#fff',
            left: calculateLeftMargin(convertToDiamondLength(width - 2)),
            height: convertToDiamondLength(width - 2),
            width: convertToDiamondLength(width - 2),
            border: '6px double black',
            
            transform: `rotateX(${getRotationAngle(50, (Math.sqrt(2) * convertToDiamondLength(width - 2) / 2))}deg) rotateZ(45deg) translate3d(0,0,0)`
        }
    })
    const classes = useStyles()


    return (
        <Box className={classes.diamond} ref={observedDiv}>
            <DynamicInput />
            <Box className={classes.decorator}>
            </Box>

        </Box>)
}

export default WeakRelationNode