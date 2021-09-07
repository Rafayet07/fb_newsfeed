import React from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const PostSettingMenu = (props) => {
    const {
        id,
        anchorEl,
        onEditPost,
        handleClose,
        handleClick,
        onDeletePost,
    } = props;

    return (
        <>
            <IconButton aria-label="settings" onClick={handleClick}>
                <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" />
            </IconButton>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null} // if not given then it will generate an error
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MenuItem onClick={handleClose}> 📌 Pin Post </MenuItem>
                <MenuItem onClick={handleClose}> 📃 Save Post </MenuItem>
                <MenuItem onClick={onEditPost}> 🖊Edit </MenuItem>
                <MenuItem onClick={handleClose}>
                      {" "}
                      👥 Edit audience{" "}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {" "}
                      🔕turn off Notification for this posts{" "}
                    </MenuItem>
                    <MenuItem onClick={handleClose}> 📅Edit date </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {" "}
                      💬Move to archive{" "}
                    </MenuItem>
                <MenuItem onClick={() => onDeletePost(id)}>🧺Move to trash</MenuItem>
            </Menu>
        </>
    )
}

export default PostSettingMenu;