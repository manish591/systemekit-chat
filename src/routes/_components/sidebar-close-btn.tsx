import { Box, IconButton } from '@mui/material';
import { useSidebarContext } from './sidebar';

export function SidebarCloseButton() {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <IconButton
      sx={(_) => ({
        position: 'absolute',
        right: 0,
        width: '20px',
        height: '20px',
        padding: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        background: '#E9EFFF',
      })}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Box component="img" src="/arrow.svg" alt="arrow" />
    </IconButton>
  );
}
