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
} from "./ui/table";
import { data } from "@/lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Courses = () => {
  return (
    <section className="max-content-width">
      <Title>My Courses</Title>

      <div className="w-full border border-border bg-neutral-50 dark:bg-primary-foreground rounded-md mt-4">
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
                className="hover:bg-secondary-foreground/10"
              >
                <TableCell>{course.number}</TableCell>
                <TableCell>{course.catalog}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.term}</TableCell>
                <TableCell className="flex flex-row items-center justify-center text-foreground">
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
