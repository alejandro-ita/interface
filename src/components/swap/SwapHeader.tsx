import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { ThemedText } from '../../theme'
import Row, { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 8px 12px;
  margin-bottom: 8px;
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          {/*<ThemedText.DeprecatedBlack fontWeight={500} fontSize={16} style={{ marginRight: '8px' }}>
            <Trans>Swap</Trans>
          </ThemedText.DeprecatedBlack>
        */}
          <ThemedText.DeprecatedWhite fontWeight={500} fontSize={24} style={{ marginRight: '8px' }}>
            <Trans>Swap</Trans>
          </ThemedText.DeprecatedWhite>
        </RowFixed>
        
        <RowFixed>
          <ThemedText.DeprecatedWhite fontWeight={500} fontSize={24} style={{ marginRight: '8px' }}>
            <Trans>Pool</Trans>
          </ThemedText.DeprecatedWhite>
        </RowFixed>

        {/*<RowFixed>
        <RowFixed>
          <ThemedText.DeprecatedWhite fontWeight={500} fontSize={24} style={{ marginRight: '8px' }}>
            <Trans>Pool</Trans>
          </ThemedText.DeprecatedWhite>
        </RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
      </RowFixed>
      
      */}
      </RowBetween>
      
      <hr style={{border: '0px',height: '0px',borderTop: '1px solid rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(255, 255, 255,0.2)'}}/>     
      
    </StyledSwapHeader>
  )
}
