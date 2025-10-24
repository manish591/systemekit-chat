import { Button } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

function Index() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h3
          style={{
            fontSize: '4rem',
          }}
        >
          Welcome Home!
        </h3>
        <Button variant="contained">Hello world</Button>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Index,
});
