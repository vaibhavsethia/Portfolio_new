import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider } from "antd";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

import "./Timeline.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 20201 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Morgan Stanley</span>
                <Divider type="vertical" /> <span>Software Developer</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Working on live projects using On-premise softwares. Creating ETL Jobs using SQL, Teradata, and OpsConsole and automating them using Autosys. Working with Migration of objects and writing shell scripts to automate the process.
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Wiley Mthree</span>
                <Divider type="vertical" /> <span>Junior Associate</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Completed training for Python, Cloud Computing, Databases, SQL and Shell scripting
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <WorkOutlineOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>JWilliamson INC</span>
                <Divider type="vertical" /> <span>Full Stack Developer </span>
              </Typography>
              <Typography className="timeline-smalltext">
                Developing Websites with Frontend and Backend liabilites,
                Working on technologies like React, Figma, AWS, GraphQL and
                Apollo
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            March, 2020 - Sept, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <LaptopMacIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade left>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Software Developer Intern</span>
                <Divider type="vertical" /> <span>Decabits Software</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Developed and Maintained React based Websites and Completed
                Visual Website Optimisation in Go language in team of 2.
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            Jan, 2020 - May, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <LaptopMacIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Upwork</span>
                <Divider type="vertical" /> <span>Freelancer</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Developed Websites and coded Programs in C++ and Python
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            June, 2019 - Sept, 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <LaptopMacIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade left>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Python Developer</span>
                <Divider type="vertical" />{" "}
                <span>
                  University School of Information Communication and Technology,
                  GGSIPU
                </span>
              </Typography>
              <Typography className="timeline-smalltext">
                Research and development of Computer Vision algorithms centered
                around Smart Traffic Lights to optimize congestion clearance
                around an intersection. Worked on Computer vision , Backend and
                Graphics in python
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            April, 2018 - July, 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <ImportContactsOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Coding Blocks</span>
                <Divider type="vertical" /> <span>Student</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Finished in Top 5 students in Data Structures and Algorithms
                course in C++
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            Aug, 2017 - Present (Aug, 2021)
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <ImportContactsOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade left>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Student</span>
                <Divider type="vertical" />{" "}
                <span>
                  University School of Information Communication and Technology,
                  GGSIPU
                </span>
              </Typography>
              <Typography className="timeline-smalltext">
                Pursuing Bachelors of Technology Degree with specialization in
                Information Technology.{" "}
                <p>
                  <strong>Cummulative GPA (Till 6th Sem) :</strong> 8.7
                </p>
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            April, 2016 - May, 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <ImportContactsOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade right>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>JD Tytler School</span>
                <Divider type="vertical" /> <span>Student</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Pursued Higher Secondary School with specialization in Physics,
                Chemistry, Maths and Computer Sciences.{" "}
                <p>
                  <strong>Percentage (Best 4) :</strong> 95%
                </p>
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            className="timeline-date"
            variant="body2"
            color="textSecondary"
          >
            April, 2014 - May, 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Zoom top>
            <TimelineDot className="timeline-icon">
              <ImportContactsOutlinedIcon />
            </TimelineDot>
          </Zoom>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Fade left>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className="timeline-bigtext"
                variant="h6"
                component="h1"
              >
                <span>Student </span>
                <Divider type="vertical" /> <span>JD Tytler School</span>
              </Typography>
              <Typography className="timeline-smalltext">
                Pursued Secondary School alongwith Computer Sciences{" "}
                <p>
                  <strong>CGPA : </strong> 9.8
                </p>
              </Typography>
            </Paper>
          </Fade>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
