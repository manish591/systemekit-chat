import {
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import { NavUser } from './nav-user';
import { GetProAccountLink } from './get-pro-account-link';
import { SidebarCloseButton } from './sidebar-close-btn';
import { AppLogo } from './app-logo';

type SidebarState = {
  isOpen: boolean;
  isMobile: boolean;
  openMobileSidebar: boolean;
  setOpenMobileSidebar: (val: boolean) => void;
  setIsOpen: (val: boolean) => void;
};

const SidebarContext = createContext<SidebarState | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('Component must be wrapped in sidebar context provider');
  }

  return context;
}

export function SidebarProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(true);
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const isMobile = useMediaQuery('(min-width:900px)');

  const value = useMemo(
    () => ({
      isOpen,
      isMobile,
      openMobileSidebar,
      setIsOpen,
      setOpenMobileSidebar,
    }),
    [isOpen, isMobile, openMobileSidebar],
  );
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function Sidebar() {
  const { isMobile, isOpen, openMobileSidebar, setOpenMobileSidebar } =
    useSidebarContext();

  if (!isMobile) {
    return (
      <Drawer
        open={openMobileSidebar}
        onClose={() => {
          setOpenMobileSidebar(false);
        }}
      >
        <Box
          component="aside"
          sx={(theme) => ({
            height: '100%',
            width: '260px',
            flexShrink: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            position: 'relative',
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(2),
            transition: 'width 300ms ease-in-out',
          })}
        >
          <Box
            sx={(theme) => ({
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(5),
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 300ms ease-in-out',
            })}
          >
            <SidebarHeader>
              <AppLogo />
            </SidebarHeader>
            <SidebarContent />
            <SidebarFooter />
          </Box>
        </Box>
      </Drawer>
    );
  }

  return (
    <Box
      component="aside"
      sx={(theme) => ({
        height: '100%',
        width: isOpen ? '330px' : '100px',
        flexShrink: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
        transition: 'width 300ms ease-in-out',
      })}
    >
      <Box
        sx={(_) => ({
          width: '100%',
          height: '100%',
        })}
      >
        <SidebarCollapsed />
        <Box
          sx={(theme) => ({
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(5),
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 300ms ease-in-out',
          })}
        >
          <SidebarHeader>
            <AppLogo />
            <SidebarCloseButton />
          </SidebarHeader>
          <SidebarContent />
          <SidebarFooter />
        </Box>
      </Box>
    </Box>
  );
}

function SidebarCollapsed() {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100px',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
        opacity: isOpen ? 0 : 1,
        transition: 'opacity 300ms ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5),
      })}
    >
      {/* header */}
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
          width: '100%',
          paddingInline: theme.spacing(4),
          justifyContent: 'center',
        })}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="logo"
          sx={(_) => ({
            width: '32px',
            height: '32px',
            flexShrink: 0,
          })}
        />
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
          <Box
            component="img"
            src="/arrow.svg"
            alt="arrow"
            sx={(_) => ({
              transform: 'rotate(180deg)',
            })}
          />
        </IconButton>
      </Box>
      {/* content */}
      <Box
        sx={(theme) => ({
          flex: 1,
          overflowY: 'auto',
          paddingInline: theme.spacing(5),
          paddingBlock: theme.spacing(5),
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: theme.spacing(8),
          })}
        >
          <Button
            sx={(theme) => ({
              width: '100%',
              paddingInline: 0,
              paddingBlock: theme.spacing(2.5),
              justifyContent: 'center',
              textTransform: 'capitalize',
              gap: theme.spacing(2),
              color: theme.palette.grey[800],
            })}
          >
            <Box
              component="img"
              src="/magnifying-glass.svg"
              alt="search"
              sx={{
                width: '24px',
                height: '24px',
              }}
            />
          </Button>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(3),
            })}
          >
            <Button
              sx={(theme) => ({
                width: '100%',
                paddingInline: 0,
                paddingBlock: theme.spacing(2.5),
                justifyContent: 'center',
                textTransform: 'capitalize',
              })}
            >
              <Box
                component="img"
                src="/subtract.svg"
                alt="search"
                sx={(_) => ({
                  width: '24px',
                  height: '24px',
                  padding: '1px',
                })}
              />
            </Button>
            <Button
              sx={(theme) => ({
                width: '100%',
                paddingInline: 0,
                paddingBlock: theme.spacing(2.5),
                justifyContent: 'center',
                textTransform: 'capitalize',
              })}
            >
              <Box
                component="img"
                src="/folder.svg"
                alt="search"
                sx={(_) => ({
                  width: '24px',
                  height: '24px',
                  padding: '1px',
                })}
              />
            </Button>
            <Button
              sx={(theme) => ({
                width: '100%',
                paddingInline: 0,
                paddingBlock: theme.spacing(2.5),
                justifyContent: 'center',
                textTransform: 'capitalize',
              })}
            >
              <Box
                component="img"
                src="/clock.svg"
                alt="search"
                sx={(_) => ({
                  width: '24px',
                  height: '24px',
                })}
              />
            </Button>
            <Button
              sx={(theme) => ({
                width: '100%',
                paddingInline: 0,
                paddingBlock: theme.spacing(2.5),
                justifyContent: 'center',
                textTransform: 'capitalize',
              })}
            >
              <Box
                component="img"
                src="/globe.svg"
                alt="search"
                sx={(_) => ({
                  width: '24px',
                  height: '24px',
                })}
              />
            </Button>
          </Box>
        </Box>
      </Box>
      {/* footer */}
      <Box
        sx={(theme) => ({
          marginTop: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: theme.spacing(3),
          paddingInline: theme.spacing(4),
        })}
      >
        <Button
          sx={(theme) => ({
            borderRadius: '8px',
            padding: theme.spacing(2),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.grey[200],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: theme.spacing(2.5),
            textAlign: 'center',
            textTransform: 'capitalize',
            backgroundImage:
              'linear-gradient(55deg, #FFDDF8 0%, #F8F9FC 12%, #F8F9FC 74%, #D9E4FF 95%)',
          })}
        >
          <Stack
            direction="column"
            gap={0.5}
            sx={(_) => ({
              overflow: 'hidden',
              flex: 1,
            })}
          >
            <Typography
              component="p"
              sx={(theme) => ({
                fontWeight: 700,
                fontSize: theme.typography.fontSize * 0.8571,
                color: theme.palette.grey[800],
              })}
            >
              Try Pro!
            </Typography>
          </Stack>
        </Button>
        <Button
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            paddingBlock: theme.spacing(3),
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(1.5),
            })}
          >
            <Box
              component="img"
              src="/avatar.png"
              alt="avatar"
              sx={(_) => ({
                widht: '100%',
                maxWidth: '100%',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
              })}
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

function SidebarHeader({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        width: '100%',
        paddingInline: theme.spacing(5),
      })}
    >
      {children}
    </Box>
  );
}

function SidebarContent() {
  return (
    <Box
      sx={(theme) => ({
        flex: 1,
        overflowY: 'auto',
        paddingInline: theme.spacing(5),
        paddingBlock: theme.spacing(5),
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: theme.spacing(5),
        })}
      >
        <Button
          sx={(theme) => ({
            width: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.grey[200],
            paddingInline: theme.spacing(3),
            paddingBlock: theme.spacing(2.25),
            justifyContent: 'start',
            textTransform: 'capitalize',
            gap: theme.spacing(2),
            bgcolor: 'white',
            borderRadius: theme.spacing(4),
            color: theme.palette.grey[800],
            boxShadow: '0 1px 2px #0A0D120D',
          })}
        >
          <Box
            component="img"
            src="/magnifying-glass.svg"
            alt="search"
            sx={{
              width: '20px',
              height: '20px',
            }}
          />
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.fontSize,
              color: theme.palette.grey[600],
            })}
          >
            Search for chats...
          </Typography>
        </Button>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
          })}
        >
          <Button
            sx={(theme) => ({
              width: '100%',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: theme.palette.grey[100],
              paddingInline: theme.spacing(3),
              paddingBlock: theme.spacing(2.5),
              justifyContent: 'start',
              textTransform: 'capitalize',
              gap: theme.spacing(2),
              bgcolor: theme.palette.background.paper,
              borderRadius: theme.spacing(4),
              color: theme.palette.grey[800],
              boxShadow: '0 0px 4px #0000001F',
            })}
          >
            <Box
              component="img"
              src="/subtract.svg"
              alt="search"
              sx={(_) => ({
                width: '22px',
                height: '22px',
                padding: '1px',
              })}
            />
            <Typography
              sx={(theme) => ({
                fontSize: theme.typography.fontSize,
              })}
            >
              Home
            </Typography>
            <Box
              sx={(theme) => ({
                marginLeft: 'auto',
                width: 'max-content',
                height: '28px',
                padding: theme.spacing(1),
                borderRadius: '4px',
                bgcolor: theme.palette.grey[100],
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1),
              })}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '11px',
                  lineHeight: '1',
                  marginTop: '1px',
                }}
              >
                ⌘
              </Typography>
              <Typography
                sx={{
                  lineHeight: '1',
                  fontSize: '14px',
                  marginTop: '1px',
                }}
              >
                H
              </Typography>
            </Box>
          </Button>
          <Button
            sx={(theme) => ({
              width: '100%',
              paddingInline: theme.spacing(3),
              paddingBlock: theme.spacing(2.5),
              justifyContent: 'start',
              textTransform: 'capitalize',
              gap: theme.spacing(2),
              borderRadius: theme.spacing(4),
              color: theme.palette.grey[800],
            })}
          >
            <Box
              component="img"
              src="/folder.svg"
              alt="search"
              sx={(_) => ({
                width: '22px',
                height: '22px',
                padding: '1px',
              })}
            />
            <Typography
              sx={(theme) => ({
                fontSize: theme.typography.fontSize,
              })}
            >
              Library
            </Typography>
            <Box
              sx={(theme) => ({
                marginLeft: 'auto',
                width: 'max-content',
                height: '28px',
                padding: theme.spacing(1),
                borderRadius: '4px',
                bgcolor: theme.palette.grey[100],
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1),
              })}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '11px',
                  lineHeight: '1',
                  marginTop: '1px',
                }}
              >
                ⌘
              </Typography>
              <Typography
                sx={{
                  lineHeight: '1',
                  fontSize: '14px',
                  marginTop: '1px',
                }}
              >
                T
              </Typography>
            </Box>
          </Button>
          <Button
            sx={(theme) => ({
              width: '100%',
              paddingInline: theme.spacing(3),
              paddingBlock: theme.spacing(2.5),
              justifyContent: 'start',
              textTransform: 'capitalize',
              gap: theme.spacing(2),
              borderRadius: theme.spacing(4),
              color: theme.palette.grey[800],
            })}
          >
            <Box
              component="img"
              src="/clock.svg"
              alt="search"
              sx={(_) => ({
                width: '22px',
                height: '22px',
              })}
            />
            <Typography
              sx={(theme) => ({
                fontSize: theme.typography.fontSize,
              })}
            >
              History
            </Typography>
            <Box
              sx={(theme) => ({
                marginLeft: 'auto',
                width: 'max-content',
                height: '28px',
                padding: theme.spacing(1),
                borderRadius: '4px',
                bgcolor: theme.palette.grey[100],
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1),
              })}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '11px',
                  lineHeight: '1',
                  marginTop: '1px',
                }}
              >
                ⌘
              </Typography>
              <Typography
                sx={{
                  lineHeight: '1',
                  fontSize: '14px',
                  marginTop: '1px',
                }}
              >
                G
              </Typography>
            </Box>
          </Button>
          <Button
            sx={(theme) => ({
              width: '100%',
              paddingInline: theme.spacing(3),
              paddingBlock: theme.spacing(2.5),
              justifyContent: 'start',
              textTransform: 'capitalize',
              gap: theme.spacing(2),
              borderRadius: theme.spacing(4),
              color: theme.palette.grey[800],
            })}
          >
            <Box
              component="img"
              src="/globe.svg"
              alt="search"
              sx={(_) => ({
                width: '22px',
                height: '22px',
              })}
            />
            <Typography
              sx={(theme) => ({
                fontSize: theme.typography.fontSize,
              })}
            >
              Explore
            </Typography>
            <Box
              sx={(theme) => ({
                marginLeft: 'auto',
                width: 'max-content',
                height: '28px',
                padding: theme.spacing(1),
                borderRadius: '4px',
                bgcolor: theme.palette.grey[100],
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1),
              })}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '11px',
                  lineHeight: '1',
                  marginTop: '1px',
                }}
              >
                ⌘
              </Typography>
              <Typography
                sx={{
                  lineHeight: '1',
                  fontSize: '14px',
                  marginTop: '1px',
                }}
              >
                L
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box
          sx={(theme) => ({
            paddingInline: theme.spacing(2.5),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            marginTop: theme.spacing(4),
          })}
        >
          <Typography
            component="h3"
            sx={(theme) => ({
              paddingLeft: '6px',
              fontWeight: 600,
              fontSize: theme.typography.fontSize,
            })}
          >
            Recent Chats
          </Typography>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(1),
            })}
          >
            <Link
              href="#"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: theme.spacing(1),
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.grey[200],
                bgcolor: theme.palette.background.paper,
                paddingBlock: theme.spacing(1.75),
                paddingInline: theme.spacing(1.5),
                textDecoration: 'none',
                borderRadius: '8px',
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize * 0.8571,
                  color: theme.palette.grey[800],
                  width: '100%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                })}
              >
                Renewable Energy Trends
              </Typography>
              <Box
                sx={(_) => ({
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#E9EFFF',
                  borderRadius: '50%',
                })}
              >
                <Box component="img" src="/ellipsis.svg" alt="" />
              </Box>
            </Link>
            <Link
              href="#"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: theme.spacing(1),
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'transparent',
                bgcolor: 'transparent',
                paddingBlock: theme.spacing(1.75),
                paddingInline: theme.spacing(1.5),
                textDecoration: 'none',
                borderRadius: '8px',
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize * 0.8571,
                  color: theme.palette.grey[800],
                  width: '100%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                })}
              >
                Write a Shakespearean sonnet about a cat that believes it's a
                dog.
              </Typography>
            </Link>
            <Link
              href="#"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: theme.spacing(1),
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'transparent',
                bgcolor: 'transparent',
                paddingBlock: theme.spacing(1.75),
                paddingInline: theme.spacing(1.5),
                textDecoration: 'none',
                borderRadius: '8px',
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize * 0.8571,
                  color: theme.palette.grey[800],
                  width: '100%',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                })}
              >
                Describe a medieval jousting tournament where all the knights
                are actually raccoons in armor.
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SidebarFooter() {
  return (
    <Box
      sx={(theme) => ({
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        paddingInline: theme.spacing(5),
      })}
    >
      <GetProAccountLink />
      <NavUser />
    </Box>
  );
}
