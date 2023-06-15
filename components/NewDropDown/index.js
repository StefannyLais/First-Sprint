import * as Icons from '../icons/NewDropDown'

import styles from './newdropdown.module.css'

export const NewDropDown = () => {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <button className={styles.buttonStyles}>
        <Icons.Edit style={styles.iconStyle} />
        <span>Edit Workflow</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Clone />
        <span>Clone Workflow</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Copy />
        <span>Copy Link</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Share />
        <span>Share</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Run />
        <span>Run Workflow Test</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Rename />
        <span>Rename</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Add />
        <span>Add To Favorites</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Folder />
        <span>Move to Folder</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Version />
        <span>Version History</span>
      </button>
      <button className={styles.buttonStyles}>
        <Icons.Delete />
        <span>Delete Workflow</span>
      </button>
    </div>
  )
}
