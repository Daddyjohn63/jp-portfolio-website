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
    <div className="py-[50px]">
      <div className="container ">
        <div className="flex flex-col items-center justify-center mb-12 gap-2">
          <h2 className="text-5xl text-customBiege font-bold text-center mb-2">
            Customer Solution Process
          </h2>

          <h3 className="text-2xl text-customBiege font-bold text-center mb-1">
            A typical process for delivering a website or web application.
          </h3>
          <p className="text-muted-foreground text-center">
            * Timescales are provide for simple to moderately complex
            applications.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - left aligned on mobile, centered on larger screens */}

          <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 h-full w-[1px] bg-customShades-shade8" />

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
                  <Card className="flex flex-col h-full bg-customShades-shade1">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          {process.subheading.toUpperCase()}
                        </span>
                        <span className="text-sm text-indigo-400 uppercase">
                          {process.time.toUpperCase()}
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        {process.mainheading.toUpperCase()}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <CardDescription className="mb-4 text-secondary-foreground text-sm  ">
                        {process.description}
                      </CardDescription>

                      <ul className="space-y-2 ">
                        {process.bullet_one && (
                          <li className="flex items-center">
                            <span className="mr-2 ">•</span>
                            <span className="text-sm">
                              {process.bullet_one}
                            </span>
                          </li>
                        )}
                        {process.bullet_two && (
                          <li className="flex items-center">
                            <span className="mr-2 ">•</span>
                            <span className="text-sm">
                              {process.bullet_two}
                            </span>
                          </li>
                        )}
                        {process.bullet_three && (
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span className="text-sm">
                              {process.bullet_three}
                            </span>
                          </li>
                        )}

                        {process.bullet_four && (
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span className="text-sm">
                              {process.bullet_four}
                            </span>
                          </li>
                        )}
                        {process.bullet_five && (
                          <li className="flex items-center">
                            <span className="mr-2 ">•</span>
                            <span className="text-sm">
                              {process.bullet_five}
                            </span>
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
