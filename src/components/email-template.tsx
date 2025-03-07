import * as React from 'react';
import { Row, Column, Text, Button, Img } from "@react-email/components";

export default function EmailTemplate() {
  return(
    <Row>
    <Column align="center">
      <Row>
        <Text className="text-[18px] font-bold leading-[28px] text-indigo-500">
          Thanks For Joining The Waitlist
        </Text>
        <Text className="text-gray-900">
          The app all creators have been waiting for will be soon available for you.
        </Text>
      </Row>
      <Row>
        <td align="center">
          <table>
            <tr>
              <td className="pr-[16px]">
                <Button href="https://play.google.com/store/apps/details?id=com.bioshop.one">
                  <Img
                    alt="Get it on Google Play button"
                    height={54}
                    src="https://react.email/static/get-it-on-google-play.png"
                  />
                </Button>
              </td>
              <td className="pl-[16px]">
                <Button href="https://apps.apple.com/us/app/bioshop/id1234567890">
                  <Img
                    alt="Download on the App Store button"
                    height={54}
                    src="https://react.email/static/download-on-the-app-store.png"
                  />
                </Button>
              </td>
            </tr>
          </table>
        </td>
      </Row>
    </Column>
  </Row>
  );
} 