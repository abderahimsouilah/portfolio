import React from 'react';
import shortlyImg from '../public/assets/projects/shortlyImg.jpg';
import MeetingImg from '../public/assets/projects/MeetingImg.jpg';
import dailyJournalImg from '../public/assets/projects/dailyJournal.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Shortly"
            backgroundImg={shortlyImg}
            projectUrl="/shortly"
            tech="Tailwind css"
          />
          <ProjectItem
            title="Daily-Journal"
            backgroundImg={dailyJournalImg}
            projectUrl="/daily-journal"
            tech="Express ejs MongoDB"
          />
          <ProjectItem
            title="Meeting"
            backgroundImg={MeetingImg}
            projectUrl="/meeting"
            tech="Nextjs"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
