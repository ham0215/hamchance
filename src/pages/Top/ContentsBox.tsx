import React from 'react';
import styled from 'styled-components/macro';
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Keywords from 'components/Keywords';
import ExternalLink from 'components/ExternalLink';

const ContentsBox = styled.div<{ img: string }>`
  position: relative;
  display: table-cell;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: url(${({ img }) => img}) no-repeat;
    background-size: 100% 100%;
    opacity: 0.2;
    transform: scaleY(-1);
  }
`;

const ContentsImage = styled.img`
  display: block;
  width: 100%;
  margin: 0 0 60%;
`;

const ContentsDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50%;
  overflow-y: auto;
`;

const ContentsDescriptionInner = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const ContentsText = styled.p`
  display: table-cell;
  vertical-align: middle;
  font-size: 1.2rem;
  line-height: 2;
`;

const ContentsButton = styled.button`
  width: 60%;
  margin-top: 20px;
  padding: 9px;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    linkWrapper: {
      textAlign: 'right',
    },
    link: {
      marginLeft: '20px',
    },
  }),
);

type Props = {
  img: string;
  title: string;
  summary: string;
  description: string;
  keywords: Array<string>;
};

export default (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { img, title, summary, description, keywords } = props;

  return (
    <ContentsBox img={img}>
      <ContentsImage src={img} alt={title} />
      <ContentsDescription>
        <ContentsDescriptionInner>
          <ContentsText>
            {title}
            <br />
            {summary}
            <br />
            <ContentsButton onClick={handleOpen}>READ MORE</ContentsButton>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">{title}</h2>
                  <div id="transition-modal-description">
                    <p>{description}</p>
                    <Keywords keywords={keywords} />
                    <div className={classes.linkWrapper}>
                      <span className={classes.link}>
                        <ExternalLink href="/" name="Go to Homepage" />
                      </span>
                      <span className={classes.link}>
                        <ExternalLink href="/" name="Go to GitHub" />
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </ContentsText>
        </ContentsDescriptionInner>
      </ContentsDescription>
    </ContentsBox>
  );
};
