import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

function Cards({ data, titulo }) {
  const producto = data;
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
          {titulo}
        </Typography>
        <Grid container spacing={2} sx={{ mb: "20px" }}>
          {/* MAPEO */}
          {/* data.map ((elemento, index)) => {} ===> siempre el primer elemento etiene que tener la propiedad prop key*/}
          {data.map((producto, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  alt={producto.nombre}
                  src={producto.imagen}
                />
                <CardContent>
                  <Typography variant="h6">{producto.nombre}</Typography>
                </CardContent>
                <CardActions sx={{ px: "15px" }}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{
                      textDecoration: "line-through",
                      lineHeight: "35px",
                      width: "50%",
                    }}
                  >
                    {producto.precio_anterior}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "right",
                      width: "50%",
                    }}
                  >
                    {producto.nuevo_precio}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* FIN MAPEO */}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
