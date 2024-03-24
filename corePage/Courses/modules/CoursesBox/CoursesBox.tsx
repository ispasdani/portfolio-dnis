import React from "react";
import stlyes from "@/corePage/Courses/modules/CoursesBox/styles.module.scss";
import CourseCard from "@/components/courseCard/CourseCard";
import ComingSoonBand from "@/components/comingSoonBand/ComingSoonBand";

const CoursesBox = () => {
  return (
    <div className={stlyes.coursesBox}>
      <div className={stlyes.comingSoonContainer}>
        <div className={stlyes.bandWrapp}>
          <ComingSoonBand />
          <ComingSoonBand
            transform="rotate(30deg) translateY(200px) translateX(-200px);"
            left="20%"
          />
        </div>
      </div>
      {/* <CourseCard /> */}
    </div>
  );
};

export default CoursesBox;
