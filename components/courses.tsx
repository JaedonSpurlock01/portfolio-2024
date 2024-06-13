import React from "react";
import { Subtitle, Title } from "./headings";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { data } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Courses = () => {
  return (
    <section className="max-content-width">
      <Title>Courses</Title>

      <div className="w-full border border-neutral-300 rounded-md mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Number</TableHead>
              <TableHead>Catalog</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.courses.map((course, index) => (
              <TableRow
                key={index}
                
              >
                <TableCell>{course.number}</TableCell>
                <TableCell>{course.catalog}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.term}</TableCell>
                <TableCell className="flex flex-row items-center justify-center text-neutral-600">
                  <a
                    href={`https://catalog.csusm.edu/preview_course_nopop.php?catoid=1&coid=${course.id}`}
                    target="_blank"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Courses;
