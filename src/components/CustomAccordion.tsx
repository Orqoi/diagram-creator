import { Stack, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NodeCard from './NodeCard';

function CustomAccordion({ title, data, getCenter, nodes, setNodes, ...props}) {
    const [expanded, setExpanded] = useState(false)
    if (data.length === 0) {
        return null
    }
    return (
        <>
            <Stack onClick={() => setExpanded(!expanded)} direction='row' justifyContent='space-between' alignItems='center' sx={{ cursor: 'pointer', width: '100%', border:'1px solid lightgray', borderRadius: '2rem', padding: '0.75rem 1.25rem', margin: '1rem 0'}}>
                <Typography width='fit-content'>{title}</Typography>
                {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon />}
            </Stack>
            {expanded ?
            <Grid 
                container
                spacing={1}
            >
                
                {data.map((nodeType, idx) => <NodeCard key={idx} getCenter={getCenter} icon={nodeType.icon} type={nodeType.title} title={nodeType.description} setNodes={setNodes} nodes={nodes}/>)}
            </Grid>
            : <></>
            }
            
        </>

        
    )
}

export default CustomAccordion