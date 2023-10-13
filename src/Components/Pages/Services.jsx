import * as React from "react";
import "./Services.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div className="whole-container">
      <h1 className="services">Our Memes</h1>
      <div className="Cards">
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://chillentertain.com/wp-content/uploads/2023/03/templates-kavalentra.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Venky movie memes
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Tea taguthayera?? ledu taganu poni endrine taguthava??
               Tea tagadu anta yedava
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://imgs.search.brave.com/CU8gyi-liJeOJOlrhcT01WvYN9IXmZIw7nCZ_LaFmTY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9seXJp/Y2Fsd29vZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEyL0JhYWRzaGFo/LU1vdmllLUJyYWht/YW5hbmRhbS1TY2Vu/ZS1NZW1lLVRlbXBs/YXRlLTEwMjR4MTAy/NC5qcGc"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Badsha movie memes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fraustaded Padmananasimha eyy yedhavaki bayapadalisina avvasaram ledu
                dokka dolu dash this is my lyf my pressure 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://pbs.twimg.com/media/FA6HcSvUUAc3eSb.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Seethamma Vaakitlo Sirimalle Chettu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Relangi mavayya Manushulu anteyney manchollu
                ee system vundi chudu ee system naku assalu nachaledu
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://imgs.search.brave.com/TNFtUP53drPhSQGV63EFNM4tnJYTHMVDljUHc4Hdu7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vz/LnRlbHVndWFkZGEu/Y28uaW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvZHVi/YWktc2VlbnUtbWVt/ZS10ZW1wbGF0ZXMt/MjkuanBnP3Jlc2l6/ZT03NjgsOTYwJnNz/bD0x"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dubai sreenu
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Rama krishna Evvadiki telusu raa evvadiki telusu
               isaka isaka amukovali
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://imgs.search.brave.com/4nnuks8ch5LgLDMBtPNFy84qQkfUuKlnlJUcQtDffnk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vz/LnRlbHVndWFkZGEu/Y28uaW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDYvYWRo/dXJzLU1lbWUtdGVt/cGxhdGVzLTItQ29w/eS5qcGc_cmVzaXpl/PTcyMCw0ODYmc3Ns/PTE"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Adhrus movie memes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Battu prema prema antunaru premaloo em ayina paddara
                meru siggu padakandi maku sachipovali ani vundi
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1S6ewMCmmXwzQGdV2gCQW_0qxVaJnG-k4iKkh37RhRarKdlpv2MOrbSzQHyKmZVhBsGo&usqp=CAU"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Khaleja movie memes
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Miriyam Gk em chesthadu?? mahanubavudu business chesukuntaru patt vadu pedha bokugadu sir
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}