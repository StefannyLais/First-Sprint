import { Add,Clone,Copy,Delete,Edit,Folder,Rename,Run,Share,Version } from './icons/NewDropDown'

import styles from './newdropdown.module.css'

export const NewDropDown = () => {

    const iconStyle = {
        marginLeft: 'auto'
    }
    const spanStyles = {
        display:'flex',
        gap:'12px',
        alignItems: 'center'
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                overflow:'hidden',
                gap: '4px',
                position: 'absolute',
                left: '-140px',
                backgroundColor: '#FFFFFF',
                boxShadow:'0 0 10px rgba(0,0,0,0.1)',
                zIndex:1,
                borderRadius: '8px',
                width: '200px'
            ,
            }}
            onClick={e => e.stopPropagation()}
        >
            <button     className={styles.buttonStyles} >
                <span style={spanStyles}>
                    <Edit style={iconStyle} /> Edit Workflow
                </span>
            </button>
            <button  className={styles.buttonStyles} > 
            <span style={spanStyles}>

                <Clone />
                Clone Workflow
            </span>
            </button>
            <button className={styles.buttonStyles}>
            <span  style={spanStyles}>
                <Copy />
                Copy Link
                </span>
            </button>
            <button  className={styles.buttonStyles}>
                <span style={spanStyles}>
                    <Share />
                    Share
                </span>
            </button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Run />Run Workflow Test</span></button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Rename />Rename</span></button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Add />Add To Favorites</span></button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Folder />Move to Folder</span></button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Version />Version History</span></button>
            <button className={styles.buttonStyles}><span style={spanStyles}><Delete />Delete Workflow</span></button>

        </div>
    
    );
};


