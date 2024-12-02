import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export const WebDesignProcessFlow = ({ processFlow }) => {
  if (!processFlow?.length) return null;

  return (
    <div className="py-12 bg-neutral-800">
      <div className="container py-12 ">
        <h2 className="text-3xl text-customBiege font-bold text-center mb-12">
          Web Design Process
        </h2>

        <div className="relative">
          {/* Vertical Line - left aligned on mobile, centered on larger screens */}
          <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 h-full w-[1px] bg-customBiege" />

          <div className="relative">
            {processFlow.map((process, index) => (
              <div
                key={process.id}
                className={`flex items-center mb-8 ${
                  index % 2 === 0
                    ? 'md:flex-row flex-row'
                    : 'md:flex-row-reverse flex-row'
                }`}
              >
                {/* Content - full width on mobile, half width on larger screens */}
                <div
                  className={`md:w-5/12 w-[calc(100%-3rem)] ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">
                          {process.subheading}
                        </span>
                        <span className="text-sm text-indigo-600 uppercase">
                          {process.Time}
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        {process.mainheading}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <CardDescription className="mb-4">
                        {process.description}
                      </CardDescription>

                      <ul className="space-y-2">
                        {process.bullet_one && (
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            {process.bullet_one}
                          </li>
                        )}
                        {process.bullet_two && (
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            {process.bullet_two}
                          </li>
                        )}
                        {process.bullet_three && (
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            {process.bullet_three}
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node - centered on the line for both mobile and desktop */}
                <div className="absolute md:left-1/2 left-4 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-800 rounded-full border-[1px] border-customBiege flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
