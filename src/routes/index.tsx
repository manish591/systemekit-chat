import {
  Box,
  Grid,
  IconButton,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { Icon } from '@/components/Icon';

function Index() {
  return (
    <Box
      sx={(_) => ({
        overflow: 'auto',
        height: '100%',
        flex: 1,
        position: 'relative',
      })}
    >
      <Box
        sx={(theme) => ({
          paddingTop: theme.spacing(20),
          paddingBottom: theme.spacing(40),
          maxWidth: '720px',
          marginInline: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
        })}
      >
        <Box>
          <Typography
            sx={(theme) => ({
              fontWeight: 800,
              fontSize: theme.typography.fontSize * 1.75,
              marginLeft: '-6px',
            })}
          >
            👋🏼 Hi Laurence!
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: 500,
              fontSize: theme.typography.fontSize * 2.5,
              marginTop: theme.spacing(5),
              maxWidth: '50%',
              lineHeight: 1.2,
            })}
          >
            What do you want to learn today?
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          sx={(theme) => ({
            marginTop: theme.spacing(10),
          })}
        >
          <Grid
            size={4}
            sx={(theme) => ({
              paddingBlock: theme.spacing(5),
              paddingInline: theme.spacing(4),
              borderRadius: '16px',

              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#E9EFFF',
              position: 'relative',
              background:
                'linear-gradient(135deg, #FFDDF8 12%, #F8F9FC 74%, #D9E4FF 94%)',
            })}
          >
            <Box
              sx={(_) => ({
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                background: '#ffffffbb',
                borderRadius: '16px',
                filter: 'blur(1px)',
              })}
            />
            <Box
              sx={(_) => ({
                zIndex: 10,
                position: 'relative',
              })}
            >
              <Icon
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#E9EFFF',
                  background: '#FDFDFD',
                }}
              >
                <Box component="img" src="/sparkles.svg" alt="" />
              </Icon>
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize + 1,
                  marginTop: theme.spacing(20),
                })}
              >
                Give me a concise summary of this meeting transcript
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={4}
            sx={(theme) => ({
              paddingBlock: theme.spacing(5),
              paddingInline: theme.spacing(4),
              borderRadius: '16px',

              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#E9EFFF',
              position: 'relative',
              background:
                'linear-gradient(135deg, #FFDDF8 12%, #F8F9FC 74%, #D9E4FF 94%)',
            })}
          >
            <Box
              sx={(_) => ({
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                background: '#ffffffbb',
                borderRadius: '16px',
                filter: 'blur(1px)',
              })}
            />
            <Box
              sx={(_) => ({
                zIndex: 10,
                position: 'relative',
              })}
            >
              <Icon
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#E9EFFF',
                  background: '#FDFDFD',
                }}
              >
                <Box component="img" src="/sparkles.svg" alt="" />
              </Icon>
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize + 1,
                  marginTop: theme.spacing(20),
                })}
              >
                Write a product description for a minimalist smartwatch
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={4}
            sx={(theme) => ({
              paddingBlock: theme.spacing(5),
              paddingInline: theme.spacing(4),
              borderRadius: '16px',

              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#E9EFFF',
              position: 'relative',
              background:
                'linear-gradient(135deg, #FFDDF8 12%, #F8F9FC 74%, #D9E4FF 94%)',
            })}
          >
            <Box
              sx={(_) => ({
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                background: '#ffffffbb',
                borderRadius: '16px',
                filter: 'blur(1px)',
              })}
            />
            <Box
              sx={(_) => ({
                zIndex: 10,
                position: 'relative',
              })}
            >
              <Icon
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#E9EFFF',
                  background: '#FDFDFD',
                }}
              >
                <Box component="img" src="/sparkles.svg" alt="" />
              </Icon>
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.fontSize + 1,
                  marginTop: theme.spacing(20),
                })}
              >
                Provide a polite response to a customer asking for a refund
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ad
          consequatur, excepturi aperiam neque animi et omnis error sequi ex
          nemo, libero, ipsam mollitia quam consequuntur nesciunt ab nostrum
          fugiat. Tenetur earum inventore assumenda quos! Cupiditate laudantium
          labore iste officia molestias sunt provident id pariatur, maxime
          expedita temporibus saepe possimus? Ad mollitia totam similique maxime
          modi eius nulla obcaecati unde. Ex, officia, dolorem laboriosam esse
          voluptatibus praesentium in labore modi, eligendi distinctio excepturi
          illo nam aliquid doloribus tempore at nobis aperiam perspiciatis
          magnam! Maiores hic in obcaecati unde assumenda iure. Blanditiis at
          doloremque reprehenderit in aperiam eaque dolore ratione sequi officia
          quisquam consequatur asperiores maxime hic quis, minus quo tenetur
          quos mollitia facilis dignissimos ipsam. Voluptatum unde architecto
          tempore ab! Fugit pariatur, odit mollitia possimus similique velit
          esse et voluptate ipsam eius accusamus praesentium! Magnam
          necessitatibus sequi iure sint nemo magni ipsam odit sed, sit suscipit
          doloremque! Dolores, saepe sint!
        </p> */}
      </Box>
      <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing(3),
          paddingInline: theme.spacing(2),
          background: theme.palette.background.paper,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: theme.palette.grey[200],
          boxShadow: '0px 0px 4px #0000001F',
          marginTop: 'auto',
          position: 'sticky',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 20,
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          maxWidth: '720px',
          margin: '0 auto',
        })}
      >
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          maxRows={12}
          placeholder="Ask me a question..."
          style={{
            width: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#EBEBEB',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingInline: '14px',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px #0A0D120D',
            fontFamily: 'Bricolage Grotesque',
          }}
          onFocus={(e) => {
            e.target.style.outlineColor = '#2063FF';
          }}
        />
        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(3),
            marginTop: theme.spacing(2),
          })}
        >
          <IconButton
            sx={(_) => ({
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#F3F3F3',
            })}
          >
            <Icon>
              <Box component="img" src="/paper-clip.svg" alt="" />
            </Icon>
          </IconButton>
          <IconButton
            sx={(_) => ({
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#F3F3F3',
            })}
          >
            <Icon>
              <Box component="img" src="/camera.svg" alt="" />
            </Icon>
          </IconButton>
          <Typography
            sx={() => ({
              color: '#ACACAC',
              fontSize: '12px',
              marginLeft: 'auto',
            })}
          >
            0/1000
          </Typography>
          <IconButton
            sx={(_) => ({
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#E9EFFF',
            })}
          >
            <Icon>
              <Box component="img" src="/paper-airplane.svg" alt="" />
            </Icon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
