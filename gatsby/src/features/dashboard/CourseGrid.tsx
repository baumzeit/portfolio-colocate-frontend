import { graphql, Link } from 'gatsby';
import React, { FC, useContext } from 'react';
import { BaseCourseFragment } from '../../../graphql-types';
import { PATH } from '../../common/constants/paths';

export const CourseGrid: FC<{ courses: BaseCourseFragment[] }> = ({
  courses,
}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {courses.map(({ title, shortDescription, slug, sections, headerImg }) => (
        <Link to={`${PATH.COURSE}/${slug}`} key={'course_' + slug}>
          <div className="rounded-lg overflow-hidden bg-secondary mb-4 min-h-[10rem] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            <div
              style={{
                backgroundImage: `url('${
                  process.env.GATSBY_API_URL + headerImg.url
                }')`,
              }}
              className="h-40 bg-center bg-cover"
            />
            <div className="px-4 py-5">
              <h2
                className="text-xl text-brand font-mono"
                style={{ textShadow: '1px 1px var(--bg-primary)' }}
              >
                {title}
              </h2>
              <div className="mt-1 leading-5 font-mono opacity-95">
                {shortDescription}
              </div>
              <div className="text-secondary mt-4 text-sm">
                {sections.length} Sections
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

// export const query = graphql`
//   fragment BaseCourse on StrapiCourse {
//     id
//     title
//     shortDescription
//     slug
//     headerImg {
//       url
//     }
//     sections {
//       ...BaseCourseSection
//     }
//   }
// `;
