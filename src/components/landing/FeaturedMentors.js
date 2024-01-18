/* eslint-disable @next/next/no-img-element */
import MentorCard from "../shared/MentorCard";

const FeaturedMentors = () => {
  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-md-8 text-center mx-auto">
            <h2 className="fs-1">Featured Courses With Their Instructors</h2>
            <p className="mb-0">Space is limited. Reserve your spot today!</p>
          </div>
        </div>
        {/* Instructor grid */}
        <div className="row g-4">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
